import { Base } from "./Base.js";

export class ProjectList  extends Base<HTMLDivElement>{ 

    
    
    constructor(private _status:"Initial"|"Active"|"Finished"){
        
        console.log("ProjectList");
        console.log(_status);
        

        super("project-list","app",`${_status}-projects`,false)
        // this._template = document.getElementById('project-list')! as HTMLTemplateElement;
        // this._hostElement = document.getElementById('app')! as HTMLDivElement;
        // const templateContent=document.importNode(this._template.content,true)
        
        // this.element = templateContent.firstElementChild ! as HTMLDivElement;
        // const title =this.element.querySelector('.title')! as HTMLHeadingElement ;
        // title.textContent="www"
        // console.log(title.textContent);
        // this._hostElement.insertAdjacentElement("beforeend",this.element);
        this.renderProjectList()
    }
   




    
    private renderProjectList():void {
        const title =this.element.querySelector('.title')! as HTMLHeadingElement ;
        console.log(title.textContent);
        
        const list=this.element.querySelector('ul')! as HTMLUListElement;
        // list.classList.add(`${this._status}-list`)
        title.textContent=` ${this._status} Projects`
    }

}