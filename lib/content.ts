import { getContent } from "./store";
import { teamMessage } from "./site";

export async function getProcesses() {
  const content = await getContent();
  return content.processes;
}

export async function getTestimonials() {
  const content = await getContent();
  return content.testimonials;
}

export async function getTeamMessage() {
  const content = await getContent();
  return teamMessage(content.site.whatsapp);
}
