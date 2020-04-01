function valoresDaProfissao(itensDaProfissao){

    itensDaProfissao.forEach(item => {
        // console.log(item, ":")
        // console.log("\t income: 0.00500")
        // console.log("\t experience: 0.00500")

        document.write(item.toLowerCase(), ":<br/>")
        document.write("&emsp; income: 0.00500<br/>")
        document.write("&emsp; experience: 0.00500<br/>")
    });
}