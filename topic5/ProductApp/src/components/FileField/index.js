import { Component } from "react";
import style from "./style.module.css"

export class FileField extends Component {


    constructor(){
        super()
        this.fileHandle = this.fileHandle.bind(this)
    }


    fileHandle(e){
        let file = e.target.files[0]
        this.props.onFile(this.props.keyImage,file)

    }

    render() {
        return(
            <div className={style.fileContent}>
                <input id="fileUpload" type="file" onChange={this.fileHandle} />
                <label htmlFor="fileUpload">Upload</label>
            </div>
            
        )
    }
}