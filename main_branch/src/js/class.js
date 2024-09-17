class General
{
    constructor()
    {
        this.ch = 0
    }

    randomNumbers(qtdNumbers, range) 
    {
        let numbers = [];
        for (let i = 0; i < qtdNumbers; i++) {
            const randomIndex = Math.floor(Math.random() * range); //+ 1;
            numbers[i] = randomIndex;
        }
        if (numbers.length > 1)
        {
            return numbers ;
        }
        else
        {
            return numbers[0];
        }
    } 

    randomString(n) 
    {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let randomString = '';
        for (let i = 0; i < n; i++) {
            const randomIndex = Math.floor(Math.random() * alphabet.length);
            randomString += alphabet[randomIndex];
        }
        return randomString.toUpperCase();
    } 

    updateUrl(newUrl) {
        window.location.href = newUrl;
    }

    jsonStr(txt){
        return JSON.stringify(txt);
    }

    encode64(str)
    {
        let x = btoa(str);
        return x;
    }
    decode64(str)
    {
        let x = atoa(str);
        return x;
    }

    revealPassword(id)
    {
        if (this.ch == 0)
        {
            document.getElementById(id).setAttribute("type", "text");
            this.ch = 1;
        }
        else if (this.ch == 1)
        {
            document.getElementById(id).setAttribute("type", "password");
            this.ch = 0;
        }
    }

    wait(t, _f)
    {
        setTimeout(() => {
            // console.log("function _f()")
            _f();
        }, t);
    }

    async sleep(t)
    {
        // console.log("use: await sleep(1000)");
        return new Promise((resolve) => setTimeout(resolve, t));
    }

}

