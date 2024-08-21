export class ProjectList {
    constructor(_status) {
        this._status = _status;
        this._template = document.getElementById('list');
        this._hostElement = document.getElementById('app');
        const templateContent = document.importNode(this._template.content, true);
        this._projectContainer = templateContent.firstElementChild;
        this._hostElement.insertAdjacentElement("beforeend", this._projectContainer);
        this.renderProjectList();
    }
    renderProjectList() {
        const title = this._projectContainer.querySelector('.title');
        console.log(title);
        const list = this._projectContainer.querySelector('ul');
        list.classList.add(`${this._status}-list`);
        title.textContent = `${this._status} Projects`;
    }
}
//# sourceMappingURL=ProjectsList.js.map