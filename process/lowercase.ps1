# Define the root path to start renaming from
$rootPath = "C:\git\hub\powerquery-io\docs" # Change this to your specific path

function Rename-ToLowerCase {
    param (
        [string]$path
    )

    # Get all items in the current path
    $items = Get-ChildItem -Path $path -Recurse -Force

    # Process directories first, from deepest to shallowest to avoid issues with moved paths
    $items | Where-Object { $_.PSIsContainer } | Sort-Object FullName -Descending | ForEach-Object {
        $lowercaseName = $_.Name.ToLower()
        write-host $_.Name, $lowercaseName
        if ($_.Name -cne $lowercaseName) {
            # write-host $_.Name
            $newPath = Join-Path (Split-Path $_.FullName -Parent) $lowercaseName
            Rename-Item $_.FullName -NewName $newPath -Force
            Write-Host "Renamed directory: $($_.FullName) to $newPath"
        }
    }

    # Process files
    $items | Where-Object { -not $_.PSIsContainer } | ForEach-Object {
        $lowercaseName = $_.Name.ToLower()
        if ($_.Name -cne $lowercaseName) {
            $newPath = Join-Path (Split-Path $_.FullName -Parent) $lowercaseName
            Rename-Item $_.FullName -NewName $newPath -Force
            Write-Host "Renamed file: $($_.FullName) to $newPath"
        }
    }
}

# Call the function with the root path
Rename-ToLowerCase -path $rootPath
