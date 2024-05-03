declare module "react-websocket" {
  export const WebSocketProvider: React.FC;
  export const useWebSocket: (url: string) => {
    sendMessage: (message: string) => void;
    lastMessage: string | null;
  };
}
