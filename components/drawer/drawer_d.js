import { Drawer } from "vaul";
export const DrawerFuji = ({ children }) => {
  return <Drawer.Root shouldScaleBackground>{children}</Drawer.Root>;
};

export const DrawerTrigger = ({ children }) => {
  return <Drawer.Trigger>{children}</Drawer.Trigger>;
};

export const DrawerContent = ({ children }) => {
  return (
    <Drawer.Portal>
      <Drawer.Overlay className="fixed inset-0 bg-black/40" />
      <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
        <div className="p-4 bg-white rounded-t-[10px] flex-1">
          <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
          {children}
        </div>
      </Drawer.Content>
    </Drawer.Portal>
  );
};
