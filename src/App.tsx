import { useSyncExternalStore } from 'react';

const getSnapshotInnerHeight = () => window.innerHeight;

const getSnapshotInnerWidth = () => window.innerWidth;

const subscribe = (cb: () => void) => {
  window.addEventListener('resize', cb);
  return () => window.removeEventListener('resize', cb);
}

export const App = () => {
  const innerHeight = useSyncExternalStore(subscribe, getSnapshotInnerHeight)
  const innerWidth = useSyncExternalStore(subscribe, getSnapshotInnerWidth)

  return <div>InnerWidth: {innerWidth}, InnerHeight: {innerHeight}</div>
}