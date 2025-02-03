if (($#==0)); then
    echo "No arguments supplied"
    exit 1
fi

for dir in "$@"; do
    new_dir = "ex$dir"
    mkdir "$new_dir"
done