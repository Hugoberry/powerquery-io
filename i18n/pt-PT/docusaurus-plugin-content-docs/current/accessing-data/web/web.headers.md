---
title: Web.Headers
---

# Web.Headers


Devolve os cabeçalhos HTTP transferidos do URL como um valor de registo.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Remarks

Devolver os cabeçalhos transferidos de `url` como um registo. Um parâmetro de registo opcional, `options`, poderá ser fornecido para especificar propriedades adicionais. O registo pode conter os seguintes campos:

-   `Query` : Adicione programaticamente parâmetros de consulta ao URL, sem ter de se preocupar com escapes.
-   `ApiKeyName` : Se o site de destino tiver uma noção de uma chave de API, este parâmetro pode ser utilizado para especificar o nome (não o valor) do parâmetro chave que é necessário utilizar no URL. O valor chave real é fornecido na credencial.
-   `Headers` : Especificar este valor como um registo vai fornecer cabeçalhos adicionais a um pedido HTTP.
-   `Timeout` : Especificar este valor como uma duração vai alterar o tempo limite para um pedido HTTP. O valor predefinido é de 100 segundos.
-   `ExcludedFromCacheKey` : Especificar este valor como uma lista vai excluir estas chaves de cabeçalho HTTP para que não façam parte do cálculo para colocar os dados em cache.
-   `IsRetry` : Especificar este valor lógico como verdadeiro vai ignorar qualquer resposta existente na cache ao obter os dados.
-   `ManualStatusHandling` : Especificar este valor como uma lista vai impedir qualquer processamento incorporado para pedidos HTTP cuja resposta tenha um destes códigos de estado.
-   `RelativePath` : Especificar este valor como texto acrescenta-o ao URL base antes de fazer o pedido.

O pedido HTTP é composto com o método HEAD. Fora de um contexto de conector com dados personalizados, apenas está disponível um subconjunto de cabeçalhos de resposta (por motivos de segurança).


## Examples

### Example #1
Obtenha os cabeçalhos HTTP para `"https://bing.com/search?q=Power+Query"` através das opções RelativePath e Query.
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
