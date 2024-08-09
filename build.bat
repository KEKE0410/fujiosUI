@echo off
cd D:\Project\sites_v2\fujiosUI

REM Babelで各コンポーネントをトランスパイル
call npx babel ./packages/components/accordion/accordion_d.js --out-file ./packages/components/accordion/accordion.js
call npx babel ./packages/components/alert/alert_d.js --out-file ./packages/components/alert/alert.js
call npx babel ./packages/components/avatar/avatar_d.js --out-file ./packages/components/avatar/avatar.js
call npx babel ./packages/components/button/button_d.js --out-file ./packages/components/button/button.js
call npx babel ./packages/components/card/card_d.js --out-file ./packages/components/card/card.js
call npx babel ./packages/components/dialog/dialog_d.js --out-file ./packages/components/dialog/dialog.js
call npx babel ./packages/components/input/input_d.js --out-file ./packages/components/input/input.js
call npx babel ./packages/components/radioGroup/radioGroup_d.js --out-file ./packages/components/radioGroup/radioGroup.js
call npx babel ./packages/components/select/select_d.js --out-file ./packages/components/select/select.js
call npx babel ./packages/components/switch/switch_d.js --out-file ./packages/components/switch/switch.js
call npx babel ./packages/components/table/table_d.js --out-file ./packages/components/table/table.js
call npx babel ./packages/components/tabs/tabs_d.js --out-file ./packages/components/tabs/tabs.js
