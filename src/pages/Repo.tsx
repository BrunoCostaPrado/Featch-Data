import { useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { Repository } from "./Repos";

export function Repo() {
  const params = useParams();
  const currentRepository = params["*"] as string;

  const queryClient = useQueryClient();

  async function handleChangeRepositoryDescription() {
    const previousRepos = queryClient.getQueriesData<Repository[]>(["repos"]);

    if (previousRepos) {
      const nextRepos = previousRepos.map((repo) => {
        if (repo.full_name === currentRepository) {
          return { ...repo, descritiption: "Testando" };
        } else {
          return repo;
        }
      });
      queryClient.setQueryData("repos", nextRepos);
    }
  }
  return (
    <div>
      <h1>{currentRepository}</h1>
      <button onClick={handleChangeRepositoryDescription}>
        Alterar descrição
      </button>
      <h1>hello World</h1>
    </div>
  );
}
