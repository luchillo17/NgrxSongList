/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface Track {
  id: string;
  url: string;
  name: string;
  thumbnail?: string;
}
