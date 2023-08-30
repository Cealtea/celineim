class Route {
    name: string;
    path: string;

    constructor(name: string, path: string) {
        this.name = name
        this.path = path
    }
}

export const routes = [
    new Route('About', '/about'),
    new Route('Blog','/blog'),
]