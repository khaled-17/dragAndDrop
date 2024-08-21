export class Fields  {

    private _templete:HTMLTemplateElement;
    private _form:HTMLFormElement;
    private _hostElement:HTMLDivElement;

    constructor(){

        this._templete = document.getElementById('fields')! as HTMLTemplateElement;
        this._hostElement = document.getElementById('app')! as HTMLDivElement;
        const templateContent=document.importNode(this._templete.content,true)
        this._form = templateContent.firstElementChild ! as HTMLFormElement;
        this._hostElement.insertAdjacentElement("afterbegin",this._form);
    }

}