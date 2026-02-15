export type AnalyticsPayload = Record<string, string | number | boolean>;

type UmamiWindow =
  | ((eventName: string, payload?: AnalyticsPayload) => void)
  | { track: (eventName: string, payload?: AnalyticsPayload) => void };

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    plausible?: (
      eventName: string,
      options?: { props?: AnalyticsPayload }
    ) => void;
    umami?: UmamiWindow;
  }
}

export function trackCtaClick(
  eventName: string,
  payload: AnalyticsPayload
): void {
  if (typeof window === "undefined") {
    return;
  }

  if (typeof window.plausible === "function") {
    window.plausible(eventName, { props: payload });
  }

  if (typeof window.umami === "function") {
    window.umami(eventName, payload);
  } else if (window.umami && typeof window.umami.track === "function") {
    window.umami.track(eventName, payload);
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, payload);
  }
}
