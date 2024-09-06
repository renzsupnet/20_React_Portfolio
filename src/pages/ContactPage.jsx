// This is a static page "Contact" section 
export default function ContactPage() {
    return (
      <div className="container pt-4">
        <h1>Contact</h1>
        <form>
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name"  required/>
              </div>
              
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  required/>
              </div>

              <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Message</label>
                <textarea class="form-control" rows="5" id="comment" name="text"></textarea>
              </div>

              
              <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
  