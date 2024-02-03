---
title: Web.Headers
---

# Web.Headers


## Description

Devolve as cabeceiras HTTP descargadas do URL como un valor de rexistro.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Details

Devolve as cabeceiras descargadas de <code>url</code> como rexistro. Pódese fornecer un parámetro de rexistro opcional, <code>options</code>, para especificar propiedades adicionais. O rexistro pode conter os seguintes campos:    <ul><li><code>Query</code> : Engada par&#225;metros de consulta mediante programaci&#243;n ao URL sen ter que preocuparse dos caracteres de escape.</li><li><code>ApiKeyName</code> : Se o sitio de destino ten unha noci&#243;n dunha clave da API, este par&#225;metro p&#243;dese utilizar para especificar o nome (non o valor) do par&#225;metro clave que se debe usar no enderezo URL. O valor da clave real proporci&#243;nase na credencial.</li><li><code>Headers</code> : Ao especificar este valor como un rexistro, forneceranse cabeceiras adicionais para unha solicitude HTTP.</li><li><code>Timeout</code> : Ao especificar este valor como unha duraci&#243;n, modificarase o tempo de espera da solicitude HTTP. O valor predefinido &#233; 100&#160;segundos.</li><li><code>ExcludedFromCacheKey</code> : Ao especificar este valor como unha lista, exclu&#237;ranse estas claves de cabeceira HTTP do c&#225;lculo para o almacenamento en cach&#233; de datos.</li><li><code>IsRetry</code> : Ao especificar este valor l&#243;xico como verdadeiro, ignoraranse as respostas existentes na cach&#233; ao obter datos.</li><li><code>ManualStatusHandling</code> : Ao especificar este valor como unha lista, evitar&#225; o tratamento integrado de solicitudes HTTP cuxa resposta conte&#241;a un destes c&#243;digos de estado.</li><li><code>RelativePath</code> : Ao especificar este valor como texto, an&#233;xase ao URL base antes de realizar a solicitude.</li></ul>    A solicitude HTTP realízase co método HEAD. Fóra dun contexto de conector de datos personalizado, só está dispoñible un subconxunto de cabeceiras de contestación (por motivos de seguranza).    


## Examples

### Example #1 
Recupera as cabeceiras HTTP para &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; mediante as opcións RelativePath e Consulta.
```powerquery
let
    searchText = "Power Query"
in
    Web.Headers(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
([
    #"Cache-Control" = "private, max-age=0",
    #"Content-Encoding" = "gzip",
    #"Content-Length" = "0",
    #"Content-Type" = "text/html; charset=utf-8",
    Date = "Tue, 14 Dec 2021 16:57:25 GMT",
    Expires = "Tue, 14 Dec 2021 16:56:25 GMT",
    Vary = "Accept-Encoding"
]
meta [
    Response.Status = 200
])
```




## Category
Accessing data
