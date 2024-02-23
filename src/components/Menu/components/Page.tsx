import { MenuMode, PageModel } from "@/components/Menu/menu.interfaces";
import classNames from "classnames";
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
        <h2
          className={classNames(
            "text-black flex gap-2 items-center p-2",
            page.isEnabled ? "bg-blue-500" : "bg-gray-300"
          )}
        >
          [page] {page.heading}
        </h2>
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
