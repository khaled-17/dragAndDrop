export class ProjectList  {

    private _template:HTMLTemplateElement;
    private _projectContainer:HTMLDivElement;
    private _hostElement:HTMLDivElement;

    constructor(){

        this._template = document.getElementById('list')! as HTMLTemplateElement;
        this._hostElement = document.getElementById('app')! as HTMLDivElement;
        const templateContent=document.importNode(this._template.content,true)
        this._projectContainer = templateContent.firstElementChild ! as HTMLDivElement;
        this._hostElement.insertAdjacentElement("beforeend",this._projectContainer);
    }
    /**
     * @desc
     */

}