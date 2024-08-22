export class Base<T extends HTMLElement> {
  private _template: HTMLTemplateElement;
  private _hostElement: HTMLDivElement;
  public element: T;

  constructor(
    private _templateId: string,
    private _hostId: string,
    private _elementId: string, 
    private _positionElementStart: boolean,
  ) {
     
    // assign template element
    this._template = document.getElementById(
      this._templateId
    )! as HTMLTemplateElement;
    // assign host element
    this._hostElement = document.getElementById(this._hostId)! as HTMLDivElement;
    // import template content


    const templateContent = document.importNode(this._template.content, true);
    this.element = templateContent.firstElementChild! as T;

    if (this._elementId) {
      this.element.id = this._elementId;
      this._insertElement(this._positionElementStart);
    }
  }

/**
 * @desc target elements : templtae ,host 
 * @param1 templeateid 
 * @param2 hostid 
 * @returns template , host
 */



private _insertElement(postionStart: boolean) {
  const isInsertStart = postionStart ? "afterbegin" : "beforeend";
  this._hostElement.insertAdjacentElement(isInsertStart, this.element);
}


  
}
