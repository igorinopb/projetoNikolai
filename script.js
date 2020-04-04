function valoresDaProfissao(itensDaProfissao){

    document.write("Break:<br/>&emsp;#Group 1<br/>")
    itensDaProfissao.forEach(item => {
        document.write("&emsp;", item.toLowerCase(), ":<br/>")
        document.write("&emsp;&emsp; income: 0.00500<br/>")
        document.write("&emsp;&emsp; experience: 0.00500<br/>")
    });

    document.write("Place:<br/>&emsp;#Group 1<br/>")
    itensDaProfissao.forEach(item => {
        document.write("&emsp;", item.toLowerCase(), ":<br/>")
        document.write("&emsp;&emsp; income: 0.00500<br/>")
        document.write("&emsp;&emsp; experience: 0.00500<br/>")
    });
}