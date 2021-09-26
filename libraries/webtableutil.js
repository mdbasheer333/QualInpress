export default class WebTable {

    constructor(element) {
        this.table = element;
        this.tabledata = new Array();
        this.header = new Array();
        this.currentrow=new Map();
    }

    getNumberOfRows(){
        return this.tabledata.length;
    }

    getNumberOfColums(){
        return this.header.length;
    }

    getRow(rowNum){
        this.currentrow=this.tabledata[rowNum-1];
        return this;
    }

    getField(colName){
        return this.currentrow.get(colName);
    }

    async getHeaders() {
        this.header = await this.table.all(by.tagName('th')).map(async ele => await ele.getText());
        return this.header;
    }

    async loadTableData(){
        await this.getHeaders();
        await this.table.all(by.tagName('tr')).each(async (ele, num) => {
            var mp = new Map();
            await ele.all(by.tagName('td')).each(async (el, nu) => {
                mp.set(this.header[nu], await el.getText());
            });

            if (mp.size > 0) {
                this.tabledata.push(mp);
            }
        });
    }

    async getTableData() {
        await this.getHeaders();
        await this.loadTableData();
        return this.tabledata;
    }

}