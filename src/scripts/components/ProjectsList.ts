export class ProjectList  {

    private _template:HTMLTemplateElement;
    private _projectContainer:HTMLDivElement;
    private _hostElement:HTMLDivElement;

    constructor(private _status:"Initial"|"Active"|"Finished"){

        this._template = document.getElementById('list')! as HTMLTemplateElement;
        this._hostElement = document.getElementById('app')! as HTMLDivElement;
        const templateContent=document.importNode(this._template.content,true)
        this._projectContainer = templateContent.firstElementChild ! as HTMLDivElement;
        this._hostElement.insertAdjacentElement("beforeend",this._projectContainer);
        this.renderProjectList()
    }
    /**
     * @desc render projects List specific own status 
     * 
     */


    private renderProjectList():void {
        const title =this._projectContainer.querySelector('.title')! as HTMLHeadingElement ;
        console.log(title);
        
        const list=this._projectContainer.querySelector('ul')! as HTMLUListElement;
        list.classList.add(`${this._status}-list`)
        title.textContent=`${this._status} Projects`
    }

}