import * as shell from "shelljs";

shell.cp("-R", "src/server/public/js/lib", "dist/public/js/");
shell.cp("-R", "src/server/public/fonts", "dist/public/");
shell.cp("-R", "src/server/public/images", "dist/public/");
