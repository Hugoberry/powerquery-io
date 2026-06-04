---
title: Web.Contents
---

# Web.Contents


Devolve o contido descargado do enderezo URL como binario.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Devolve o contido descargado de `url` como binario. Pódese proporcionar un parámetro de rexistro opcional, `options`, para especificar propiedades adicionais. O rexistro pode conter os seguintes campos:

-   `Query` : Engada parámetros de consulta mediante programación ao URL sen ter que preocuparse dos caracteres de escape.
-   `ApiKeyName` : Se o sitio de destino ten unha noción dunha clave da API, este parámetro pódese utilizar para especificar o nome (non o valor) do parámetro clave que se debe usar no enderezo URL. O valor da clave real proporciónase na credencial.
-   `Headers` : Ao especificar este valor como un rexistro, forneceranse cabeceiras adicionais para unha solicitude HTTP.
-   `Timeout` : Ao especificar este valor como unha duración, modificarase o tempo de espera da solicitude HTTP. O valor predefinido é 100 segundos.
-   `ExcludedFromCacheKey` : Ao especificar este valor como unha lista, excluíranse estas claves de cabeceira HTTP do cálculo para o almacenamento en caché de datos.
-   `IsRetry` : Ao especificar este valor lóxico como verdadeiro, ignoraranse as respostas existentes na caché ao obter datos.
-   `ManualStatusHandling` : Ao especificar este valor como unha lista, evitará o tratamento integrado de solicitudes HTTP cuxa resposta conteña un destes códigos de estado.
-   `RelativePath` : Ao especificar este valor como texto, anéxase ao URL base antes de realizar a solicitude.
-   `Content` : Ao especificar este valor, modifícase a solicitude web de GET a POST, usando o valor da opción como contido de POST.

A solicitude HTTP realízase como GET (cando non se especifica contido) ou como POST (cando hai contido). As solicitudes POST só se poden facer de forma anónima.  
  
​ As cabeceiras da resposta HTTP están dispoñibles como metadatos no resultado binario. Fóra dun contexto de conector de datos personalizado, só está dispoñible un subconxunto de cabeceiras de resposta (por razóns de seguridade).


## Examples

### Example #1
Recuperar os contidos de `"https://bing.com/search?q=Power+Query"` usando as opcións de RelativePath e consulta. Estas opcións poden utilizarse para consultar dinamicamente un URL de base estática.
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
Conectar a un URL seguro que acepte unha clave de autenticación como parte da súa cadea de consulta. En vez de codificar a clave secreta en M (o que supoñería un risco de seguridade), A clave pódese proporcionar de forma segura especificando o seu nome (non o seu valor) en M, escollendo a autenticación da API web e introducindo o valor da clave como parte da credencial da API web. Cando se usa deste xeito, o seguinte exemplo xerará unha solicitude a `"https://contoso.com/api/customers/get?api_key=******"`.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
