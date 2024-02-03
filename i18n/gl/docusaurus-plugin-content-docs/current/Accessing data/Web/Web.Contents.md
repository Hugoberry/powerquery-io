---
title: Web.Contents
---

# Web.Contents


## Description

Devolve o contido descargado do enderezo URL como binario.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Details

Devolve o contido descargado do <code>url</code> como binario. Pódese fornecer un parámetro de rexistro opcional, <code>options</code>, para especificar propiedades adicionais. O rexistro pode conter os seguintes campos:    <ul><li><code>Query</code> : Engada par&#225;metros de consulta mediante programaci&#243;n ao URL sen ter que preocuparse dos caracteres de escape.</li><li><code>ApiKeyName</code> : Se o sitio de destino ten unha noci&#243;n dunha clave da API, este par&#225;metro p&#243;dese utilizar para especificar o nome (non o valor) do par&#225;metro clave que se debe usar no enderezo URL. O valor da clave real proporci&#243;nase na credencial.</li><li><code>Headers</code> : Ao especificar este valor como un rexistro, forneceranse cabeceiras adicionais para unha solicitude HTTP.</li><li><code>Timeout</code> : Ao especificar este valor como unha duraci&#243;n, modificarase o tempo de espera da solicitude HTTP. O valor predefinido &#233; 100&#160;segundos.</li><li><code>ExcludedFromCacheKey</code> : Ao especificar este valor como unha lista, exclu&#237;ranse estas claves de cabeceira HTTP do c&#225;lculo para o almacenamento en cach&#233; de datos.</li><li><code>IsRetry</code> : Ao especificar este valor l&#243;xico como verdadeiro, ignoraranse as respostas existentes na cach&#233; ao obter datos.</li><li><code>ManualStatusHandling</code> : Ao especificar este valor como unha lista, evitar&#225; o tratamento integrado de solicitudes HTTP cuxa resposta conte&#241;a un destes c&#243;digos de estado.</li><li><code>RelativePath</code> : Ao especificar este valor como texto, an&#233;xase ao URL base antes de realizar a solicitude.</li><li><code>Content</code> : Ao especificar este valor, modif&#237;case a solicitude web de GET a POST, usando o valor da opci&#243;n como contido de POST.</li></ul>    A solicitude HTTP realízase como GET (cando non se especifica contido) ou POST (cando hai contido). As solicitudes de POST só poden realizarse de forma anónima.    <br />    As cabeceiras da contestación HTTP están dispoñibles como metadatos no resultado binario. Fóra dun contexto de conector de datos personalizado, só está dispoñible un subconxunto de cabeceiras de resposta (por motivos de seguranza).    


## Examples

### Example #1 
Recuperar os contidos de &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; usando as opcións de RelativePath e consulta. Estas opcións poden utilizarse para consultar dinamicamente un URL de base estática.
```powerquery
let
    searchText = "Power Query"
in
    Web.Contents(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
binary
```


### Example #2 
Facer un POST en contra dun URL, pasando unha carga JSON binaria e analizando a resposta como JSON.
```powerquery
let
    url = ...,
    headers = [#"Content-Type" = "application/json"],
    postData = Json.FromValue([x = 235.7, y = 41.53]),
    response = Web.Contents(
        url,
        [
            Headers = headers,
            Content = postData
        ]
    ),
    jsonResponse = Json.Document(response)
in
    jsonResponse
```

Result: 
```powerquery
table
```


### Example #3 
Conéctate a un URL seguro que acepte unha clave de autenticación como parte da súa cadea de consulta. En lugar de inserir directamente a clave secreta en M (que podería supoñer un risco de seguranza),     pode fornecerse a clave de forma segura especificando o seu nome (non o seu valor) en M, escollendo a autenticación mediante a API web e indicando o valor da clave como a credencial da API web.    Cando se usa este método, o exemplo seguinte xerará unha solicitude para &lt;code&gt;&#34;https://contoso.com/api/customers/get?api_key=\*\*\*\*\*\*&#34;&lt;/code&gt;.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
