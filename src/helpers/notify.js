import { Notify } from "quasar";

export function VssNotify (t, message, color) {
  Notify.create({
    message: t("notify." + message),
    color: color,
    textColor: "black",
    position: "top",
    actions: [{ icon: "close", color: "black" }],
    timeout: 10000,
  });
}
