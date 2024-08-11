@echo off

cd D:\Project\sites_v2\fujios-ui\components
call npx babel ./accordion/accordion_d.js --out-file ./accordion/accordion.js
call npx babel ./alert/alert_d.js --out-file ./alert/alert.js
call npx babel ./avatar/avatar_d.js --out-file ./avatar/avatar.js
call npx babel ./button/button_d.js --out-file ./button/button.js
call npx babel ./card/card_d.js --out-file ./card/card.js
call npx babel ./dialog/dialog_d.js --out-file ./dialog/dialog.js
call npx babel ./input/input_d.js --out-file ./input/input.js
call npx babel ./radioGroup/radioGroup_d.js --out-file ./radioGroup/radioGroup.js
call npx babel ./select/select_d.js --out-file ./select/select.js
call npx babel ./switch/switch_d.js --out-file ./switch/switch.js
call npx babel ./table/table_d.js --out-file ./table/table.js
call npx babel ./tabs/tabs_d.js --out-file ./tabs/tabs.js
call npx babel ./headerNav/headerNav_d.js --out-file ./headerNav/headerNav.js
call npx babel ./drawer/drawer_d.js --out-file ./drawer/drawer.js
call npx babel ./sheet/sheet_d.js --out-file ./sheet/sheet.js