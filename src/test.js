<div>
    <JSONTree data={data} theme={{
        extend: theme,
        // underline keys for literal values
        valueLabel: {
            textDecoration: 'underline'
        },
        // switch key for objects to uppercase when object is expanded.
        // `nestedNodeLabel` receives additional arguments `expanded` and `keyPath`
        nestedNodeLabel: ({ style }, nodeType, expanded) => ({
            style: {
                ...style,
                textTransform: expanded ? 'uppercase' : style.textTransform
            }
        })
    }} />
</div>
