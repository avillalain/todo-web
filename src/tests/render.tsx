import {render, RenderOptions} from "@testing-library/react";
import {AppStore, RootState, setupStore} from "stores";
import {PropsWithChildren, ReactElement} from "react";
import {Provider} from "react-redux";

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>
  store?: AppStore
}

export function renderWithProviders(
  ui: ReactElement,
  extendedRenderOptions: ExtendedRenderOptions = {}
) {
  const {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  } = extendedRenderOptions;

  const Wrapper = ( { children }: PropsWithChildren ) => (
    <Provider store={ store }> { children }</Provider>
  );

  return {
    store, ...render(ui, { wrapper: Wrapper, ...renderOptions })
  };
}