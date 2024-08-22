import { Base } from "./Base.js";
export class ProjectList extends Base {
    constructor(_status) {
        console.log("ProjectList");
        console.log(_status);
        super("project-list", "app", `${_status}-projects`, false);
        this._status = _status;
        this.renderProjectList();
    }
    renderProjectList() {
        const title = this.element.querySelector('.title');
        console.log(title.textContent);
        const list = this.element.querySelector('ul');
        title.textContent = ` ${this._status} Projects`;
    }
}
//# sourceMappingURL=ProjectsList.js.map