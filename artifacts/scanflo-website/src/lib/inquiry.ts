export type Inquiry = {
  name: string;
  company: string;
  email: string;
  phone: string;
  productInterest: string;
  message: string;
};

export function inquiryEmail(values: Inquiry): string {
  const subject = `Scanflo enquiry — ${values.company}`;
  const body = [
    `Name: ${values.name}`,
    `Company: ${values.company}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone}`,
    `Product interest: ${values.productInterest}`,
    "",
    "Requirements / Message:",
    values.message,
  ].join("\n");
  return `mailto:info@scanengg.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export async function sendInquiry(
  endpoint: string,
  values: Inquiry,
  request: typeof fetch = fetch,
): Promise<void> {
  if (!/^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(endpoint.trim())) {
    throw new Error("The enquiry service is not configured correctly. Please email info@scanengg.com.");
  }
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await request(endpoint.trim(), {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...values, _subject: `Scanflo enquiry — ${values.company}` }),
      signal: controller.signal,
    });
    const result = await response.json().catch(() => null);
    if (!response.ok || result?.ok !== true) {
      const detail = Array.isArray(result?.errors)
        ? result.errors.map((error: { message?: string }) => error.message).filter(Boolean).join(" ")
        : "";
      throw new Error(detail || `The enquiry service could not accept your message (HTTP ${response.status}).`);
    }
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error("The enquiry service timed out. Please try again or email info@scanengg.com.");
    }
    if (error instanceof TypeError) {
      throw new Error("Unable to reach the enquiry service. Check your internet connection or email info@scanengg.com.");
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}
