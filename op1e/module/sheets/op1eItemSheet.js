export default class op1eItemSheet extends ItemSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["op1e", "sheet", "agente"],
            tabs: [{ navSelector: ".tabs", contentSelector: ".content", initial: "attribute" }],
            width: 520,
            height: 315
        });
    }

    get template() {
        return `systems/op1e/templates/sheets/${this.item.data.type}-sheet.html`;
    }

    getData() {
        const baseData = super.getData();
        let sheetData = {
            owner: this.item.isOwner,
            editable: this.isEditable,
            item: baseData.item,
            data: baseData.item.data.data,
            config: CONFIG.op1e
        };

        return sheetData;
    }
}