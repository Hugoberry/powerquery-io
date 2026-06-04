---
title: Web.Headers
---

# Web.Headers


Devolve as cabeceiras HTTP descargadas do URL como un valor de rexistro.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Remarks

Devolve as cabeceiras descargadas de `url` como rexistro. Pódese fornecer un parámetro de rexistro opcional, `options`, para especificar propiedades adicionais. O rexistro pode conter os seguintes campos:

-   `Query` : Engada parámetros de consulta mediante programación ao URL sen ter que preocuparse dos caracteres de escape.
-   `ApiKeyName` : Se o sitio de destino ten unha noción dunha clave da API, este parámetro pódese utilizar para especificar o nome (non o valor) do parámetro clave que se debe usar no enderezo URL. O valor da clave real proporciónase na credencial.
-   `Headers` : Ao especificar este valor como un rexistro, forneceranse cabeceiras adicionais para unha solicitude HTTP.
-   `Timeout` : Ao especificar este valor como unha duración, modificarase o tempo de espera da solicitude HTTP. O valor predefinido é 100 segundos.
-   `ExcludedFromCacheKey` : Ao especificar este valor como unha lista, excluíranse estas claves de cabeceira HTTP do cálculo para o almacenamento en caché de datos.
-   `IsRetry` : Ao especificar este valor lóxico como verdadeiro, ignoraranse as respostas existentes na caché ao obter datos.
-   `ManualStatusHandling` : Ao especificar este valor como unha lista, evitará o tratamento integrado de solicitudes HTTP cuxa resposta conteña un destes códigos de estado.
-   `RelativePath` : Ao especificar este valor como texto, anéxase ao URL base antes de realizar a solicitude.

A solicitude HTTP realízase co método HEAD. Fóra dun contexto de conector de datos personalizado, só está dispoñible un subconxunto de cabeceiras de contestación (por motivos de seguranza).


## Examples

### Example #1
Recupera as cabeceiras HTTP para `"https://bing.com/search?q=Power+Query"` mediante as opcións RelativePath e Consulta.
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
