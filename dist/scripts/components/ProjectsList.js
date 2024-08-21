export class ProjectList {
    constructor() {
        this._template = document.getElementById('list');
        this._hostElement = document.getElementById('app');
        const templateContent = document.importNode(this._template.content, true);
        this._projectContainer = templateContent.firstElementChild;
        this._hostElement.insertAdjacentElement("beforeend", this._projectContainer);
    }
}
//# sourceMappingURL=ProjectsList.js.map