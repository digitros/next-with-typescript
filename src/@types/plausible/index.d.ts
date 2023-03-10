type Options = {
  props?: Record<string, string>;
};

interface Window {
  plausible: (event: "add_fox" | "delete_fox", options?: Options) => void;
}
