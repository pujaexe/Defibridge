import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "a4bhUrqWbeGH9fzcN7EwNU",  // ID of a project you are using
      token: "mFQueA3zj5S03ms48dFZbtG4Z8nF620da5FgSCrNZrMAhNb8ndlajbC9QH5CWmTiGULQrPOiOcNNLkVfVaIA"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})