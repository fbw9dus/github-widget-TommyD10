

class GitHub {
    constructor(name, click, output){
        this.input   = document.querySelector(name)
        this.button = document.querySelector(click)
        this.button.addEventListener('click',this.fetchGit.bind(this))
        this.output = output
        
        
    }

    async  fetchGit(){
        try{
            let value = this.input.value
            let url    = `https://api.github.com/users/${value}/repos`
            let data    = await fetch(url)
            let request = await data.json()

            $(this.output).empty();

             for (let i = 0; i < request.length; i++){
                
                let htmlData = `
                                <a href="${request[i].html_url}" class="alink" target="_blank">
                                <div class="bg-secondary p-4 custom-div">
                                    <h4 class="font-weight-bolder">${request[i].name}</h4>
                                    <h5 class="text-light">${request[i].description === null ? "" :request[i].description}</h5>
                                    <p class="float-right">${request[i].created_at.slice(8,10)}-${request[i].created_at.slice(5,8)}${request[i].created_at.slice(0,4)}</p>

                                </div> <a/>
                                <hr>
                `
                document.querySelector(this.output).insertAdjacentHTML("beforeend", htmlData)

                 
            }

            console.log(request)

        }
        catch(error){
            console.log(error)
        }

    }

   


}

new GitHub('.input-custom','.button-custom','.output')