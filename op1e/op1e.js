import { op1e } from "./module/config.js"
import op1eItemSheet from "./module/sheets/op1eItemSheet.js";
import op1eActorSheet from "./module/sheets/op1eActorSheet.js";

async function preloadHandlebarsTemplates() {
    const templatePaths = [
        "systems/op1e/templates/sheets/parts/header-sheet.html",
        "systems/op1e/templates/sheets/parts/atributos-sheet.html",
        "systems/op1e/templates/sheets/parts/pericias-sheet.html",
        "systems/op1e/templates/sheets/parts/outros-sheet.html",
        "systems/op1e/templates/sheets/parts/inventario-sheet.html",
        "systems/op1e/templates/sheets/parts/poderes-sheet.html",
        "systems/op1e/templates/sheets/parts/rituais-sheet.html",
        "systems/op1e/templates/sheets/parts/diario-sheet.html"
    ]

    return loadTemplates(templatePaths)
};

Hooks.once("init", function () {
    console.log("op1e | Iniciando Ordem Paranormal");

    CONFIG.op1e = op1e;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("op1e", op1eItemSheet, { makeDefault: true });
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("op1e", op1eActorSheet, { makeDefault: true });

    preloadHandlebarsTemplates();
});

