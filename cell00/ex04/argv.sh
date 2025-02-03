args=("$@")
if (($# == 0))
then
    echo "arguments supplied"
else
    for ((i=0;i<$#;i++)); do
        echo ${args[${i}]}
        if ((i==2)); then
            break
        fi
    done
fi