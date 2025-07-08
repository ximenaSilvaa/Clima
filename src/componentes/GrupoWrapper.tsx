import { useParams } from 'react-router-dom';
import { groups } from '../types/data';
import Grupo from '../pages/grupo';

function GrupoWrapper() {
  const { id } = useParams();
  const group = groups.find(g => g.id === id);

  if (!group) return <div>Grupo no encontrado</div>;

  return <Grupo group={group} />;
}

export default GrupoWrapper;
