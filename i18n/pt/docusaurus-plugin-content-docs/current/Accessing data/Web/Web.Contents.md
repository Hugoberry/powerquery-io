---
title: Web.Contents
---

# Web.Contents


## Description

Returns the contents downloaded from the url as binary.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Details

Returns the contents downloaded from <code>url</code> as binary. An optional record parameter, <code>options</code>, may be provided to specify additional properties. The record can contain the following fields:    <ul><li><code>Query</code> : Programmatically add query parameters to the URL without having to worry about escaping.</li><li><code>ApiKeyName</code> : If the target site has a notion of an API key, this parameter can be used to specify the name (not the value) of the key parameter that must be used in the URL. The actual key value is provided in the credential.</li><li><code>Headers</code> : Specifying this value as a record will supply additional headers to an HTTP request.</li><li><code>Timeout</code> : Specifying this value as a duration will change the timeout for an HTTP request. The default value is 100 seconds.</li><li><code>ExcludedFromCacheKey</code> : Specifying this value as a list will exclude these HTTP header keys from being part of the calculation for caching data.</li><li><code>IsRetry</code> : Specifying this logical value as true will ignore any existing response in the cache when fetching data.</li><li><code>ManualStatusHandling</code> : Specifying this value as a list will prevent any builtin handling for HTTP requests whose response has one of these status codes.</li><li><code>RelativePath</code> : Specifying this value as text appends it to the base URL before making the request.</li><li><code>Content</code> : Specifying this value changes the web request from a GET to a POST, using the value of the option as the content of the POST.</li></ul>    The HTTP request is made as either a GET (when no Content is specified) or a POST (when there is Content). POST requests may only be made anonymously.    <br />    The headers of the HTTP response are available as metadata on the binary result. Outside of a custom data connector context, only a subset of response headers is available (for security reasons).    


## Examples

### Example #1 
Retrieve the contents of &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; using the RelativePath and Query options. These options can be used to dynamically query a static base URL.
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
Perform a POST against a URL, passing a binary JSON payload and parsing the response as JSON.
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
Connect to a secure URL that accepts an authentication key as part of its query string. Instead of hard-coding the secret key in M (which would pose a security risk),     the key can be provided securely by specifying its name (not its value) in M, choosing Web API authentication, and entering the key value as part of the Web API credential.    When used in this way, the following example will generate a request to &lt;code&gt;&#34;https://contoso.com/api/customers/get?api_key=\*\*\*\*\*\*&#34;&lt;/code&gt;.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
