import { analytics, logEvent } from "../config/firebase.config";

export const ToStoreEvents = (
  eventTitle: string,
  eventParams?: { [key: string]: string }
) => {
  try {
    logEvent(analytics, eventTitle, { ...eventParams });
  } catch (error) {
    // handle error here
    console.error(error);
  }
};
