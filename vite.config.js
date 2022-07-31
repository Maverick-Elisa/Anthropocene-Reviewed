import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

const getConfig = ({ command, mode }) => ({
  plugins: [react(), legacy()],
});

export default getConfig;
