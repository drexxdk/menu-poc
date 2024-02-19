import { MenuMode, PageModel } from "@/components/Menu/menu.interfaces";
import MenuItemRow from "./MenuItemRow";
import PageItemsList from "./PageItemList";

const Page = ({
  page,
  onChange,
  mode,
}: {
  page: PageModel;
  onChange?: ({
    page,
    isEnabled,
  }: {
    page: PageModel;
    isEnabled: boolean;
  }) => void;
  mode: MenuMode;
}) => {
  return (
    <>
      <MenuItemRow
        mode={mode}
        isEnabled={!!page.isEnabled}
        onChange={(isEnabled) => {
          onChange?.({ page: { ...page, isEnabled }, isEnabled });
        }}
      >
        <h2 className="bg-blue-500 text-black p-2">[page] {page.heading}</h2>
      </MenuItemRow>
      <PageItemsList
        pageItems={page.items}
        mode={mode}
        onChange={({ pageItems, isEnabled }) => {
          onChange?.({
            page: {
              ...page,
              items: pageItems,
            },
            isEnabled,
          });
        }}
      />
    </>
  );
};
export default Page;
