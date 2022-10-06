

export default function Main() {


  return (
    <div className="app-main">
      <div align="center">
        <form>
        <input placeholder="enter class name" mandatory= "true"/>
        <input placeholder="enter semester"/>
        <button> Save</button>
        </form>

      </div>
      <div className="app-main-note-edit">
      <input type="text" id="title" autoFocus placeholder="Enter title here"/>
      <textarea id="body" placeholder="Write your note here..."/>
      <button type="button" class="btn btn-primary">Add note</button>

      </div>
      <br></br>
      <div className="app-main-note-preview">
        <h1 className="preview-title">TITLE</h1>
        <div className="markdown-preview">note preview</div>
      </div>
    </div>
  )
}