import { createStoreon, StoreonModule } from "storeon";

interface State {
  comment: string;
}

interface Event {
  inc: undefined;
  setComment: string;
}

export const comment: StoreonModule<State, Event> = (store) => {
  store.on("@init", () => ({ comment: "" }));
  store.on("setComment", (state, event) => ({ ...state, comment: event }));
};

export const storeonStore = createStoreon([comment]);
