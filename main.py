import os

from flask import Flask, send_from_directory

PUBLIC_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "public")

app = Flask(__name__, static_folder=None)


@app.route("/")
def index():
    return send_from_directory(PUBLIC_DIR, "index.html")


@app.route("/<path:path>")
def serve_file(path):
    full_path = os.path.join(PUBLIC_DIR, path)
    if os.path.isdir(full_path):
        return send_from_directory(full_path, "index.html")
    if os.path.exists(full_path):
        return send_from_directory(PUBLIC_DIR, path)
    return send_from_directory(PUBLIC_DIR, "index.html"), 404


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
