import React, { useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./post.css";
import { useEffect } from "react";
import { CommentForm } from "../CommentForm";
import { PostComment } from "./PostComment";

interface IClose { 
  onClose?: () => void;
}

export function Post(props: IClose) {
  const ref = useRef<HTMLDivElement>(null);
  const node = document.querySelector("#modal_root");
  if (!node) return null;

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        console.log("closed")
        props.onClose?.();
      }
    }

    document.addEventListener("click", handleClick);
    return ()=> document.removeEventListener("click", handleClick);
  });


  return ReactDOM.createPortal(
    <div className={styles.modal} ref={ref}>
      <h2>
        {" "}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, fuga.
      </h2>
      <div className={styles.content}>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          ratione adipisci illo natus odit quasi, iusto, numquam expedita
          necessitatibus facere magnam quaerat laboriosam est esse eveniet magni
          porro rerum inventore.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          placeat a, nam ullam repellendus nobis sunt ipsum incidunt porro
          quaerat? Voluptatem sint ratione consequatur! Distinctio labore
          praesentium voluptates debitis magnam!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          quia officia laborum corporis voluptate earum beatae magnam aliquid
          provident est quam fuga voluptas, aut quas sunt reprehenderit tempore
          commodi, harum sint doloremque eveniet quo possimus libero dicta. Sunt
          quasi animi tenetur. Vero necessitatibus minima ut? Exercitationem id
          necessitatibus vero sunt commodi quos! Exercitationem laborum animi ab
          neque dolorum perferendis numquam, nulla enim dicta placeat? Adipisci
          at, non reiciendis commodi animi voluptatum culpa perspiciatis hic
          autem error repudiandae eius debitis porro itaque tenetur recusandae
          vero nostrum alias! Quos explicabo id facilis quaerat necessitatibus
          dolorem laborum minima eaque tempora assumenda harum earum tempore eos
          vel, hic reprehenderit illo, non, sunt voluptates perspiciatis nulla
          incidunt corrupti! Sed nesciunt, maxime perspiciatis distinctio
          molestiae incidunt libero consequatur quis provident mollitia
          temporibus iure adipisci dolore harum natus alias autem expedita omnis
          aliquam! Repellat, molestiae inventore. Ad adipisci maiores vero at
          ducimus hic, soluta, possimus quidem explicabo, reiciendis accusamus
          quod? Magni aliquam dolores ut ab quidem facilis laudantium. Modi quo
          doloribus vel voluptatibus vero libero dolor quod eum repellendus,
          quaerat, nam voluptatem hic earum. Quisquam qui laborum inventore
          distinctio dolorem, consectetur vitae illum perferendis officia dicta
          libero non eveniet repellendus maiores. Error dolorem, blanditiis
          voluptatibus quod mollitia soluta culpa totam quam sapiente nostrum
          consectetur ullam aperiam eius nulla! Facere cumque beatae maiores
          aspernatur molestias quibusdam distinctio perferendis? Non pariatur
          rerum sapiente ratione inventore, iusto rem eos nam magnam quas! Eos
          odio, necessitatibus tenetur pariatur autem nihil accusantium culpa
          modi facere voluptatibus quia quos corporis. Aperiam officiis pariatur
          eius quo laboriosam sint odio. Voluptatem iusto temporibus totam enim,
          expedita dolorum autem suscipit maiores, labore illum numquam. Modi id
          saepe debitis, doloribus, iste iure blanditiis ea recusandae illo
          alias accusamus perspiciatis deserunt ab minima hic voluptatibus
          nulla, aspernatur quam. Iusto obcaecati amet earum officia rerum
          quisquam minus iure iste quaerat. Sit eius debitis dolores quas,
          tempore cumque sunt non possimus magni repudiandae optio maxime,
          delectus rem in quasi fugit architecto provident iusto illum. Numquam
          quia enim ipsa quo. Sunt ullam aut vero reiciendis veritatis alias.
          Modi, tempora. Ad aliquid ducimus asperiores tempora voluptates quae,
          eos, minus commodi optio dolore cum minima illum quod in officiis
          nulla aperiam blanditiis nihil ipsum nemo quaerat. Nesciunt, obcaecati
          doloribus aliquam facere beatae sequi, quo blanditiis sunt enim
          laborum quos ipsa? Adipisci, eveniet at. Facere quae, aperiam,
          asperiores natus magni quibusdam quasi ducimus ullam expedita
          corporis, a numquam atque non alias corrupti vero suscipit? Incidunt
          voluptate molestiae dolor ratione blanditiis fugiat beatae aliquam
          corporis commodi obcaecati non eos, temporibus nobis itaque eligendi
          quo fuga alias debitis, aspernatur iste quod deserunt a animi quaerat.
          Nisi sequi velit, nihil porro debitis adipisci incidunt minima
          perferendis atque ea. Consectetur sint nostrum accusamus at fugit
          dolore libero iste amet necessitatibus modi, consequuntur dolorum
          neque veniam aut animi, asperiores voluptatum rerum ex voluptate! Eum,
          impedit autem debitis consequatur laudantium corporis cumque
          praesentium nobis molestias sed minus odit modi! Quasi porro officiis
          perferendis placeat. Reprehenderit, veritatis itaque minima illum
          vitae explicabo quae quas officia fugiat cupiditate aliquam quaerat
          cum cumque quo eveniet vero architecto porro temporibus ad ipsum
          corrupti tenetur. Hic reprehenderit eveniet aliquid pariatur
          asperiores. Et ut architecto itaque nobis rerum nesciunt ducimus
          quasi! Blanditiis magnam consequatur inventore, facilis dicta aliquam
          repellat culpa cumque natus non voluptate architecto cupiditate cum
          labore libero ab amet voluptatem minus nisi unde ullam, enim ut
          facere? Quod consectetur fugiat nostrum veritatis deleniti pariatur
          ducimus rerum eaque ex facere assumenda similique rem earum obcaecati
          asperiores, ipsam expedita optio cupiditate totam quis praesentium
          aliquam! Ad delectus doloribus provident aut cum exercitationem in
          saepe ratione quidem esse aperiam dignissimos nam, dolorem laboriosam
          voluptatum obcaecati aliquid, expedita minima? Fuga iste corporis
          eaque dolorum odit, necessitatibus error sed quo perspiciatis
          voluptatibus doloremque quam eveniet quaerat totam cum pariatur cumque
          reiciendis tempora expedita architecto maxime inventore eligendi.
          Dolores quam consectetur voluptas aliquid laudantium ex harum laborum
          nulla repudiandae modi accusamus saepe perspiciatis dolorum quo
          voluptatem possimus eaque inventore molestias, consequatur itaque
          nemo. Odio, ad exercitationem? Dolor sunt non obcaecati, ratione
          eligendi ut voluptatum placeat delectus debitis! Laboriosam incidunt,
          accusantium maxime rerum ducimus dicta. Natus cum nulla sequi
          doloremque sapiente hic! Quisquam, blanditiis facilis ut sed illum
          ducimus atque corporis optio sint. Asperiores laudantium porro
          mollitia amet. Similique ullam aspernatur sapiente consequatur natus
          libero nulla corporis officiis ad quisquam veritatis alias aliquid
          quibusdam consequuntur eum facilis quo, nostrum iure? Natus deserunt
          dignissimos repellat quam repellendus omnis eligendi accusantium
          debitis eos, inventore in ratione cum iure odio reiciendis dicta quia
          consequuntur sunt praesentium recusandae! Perferendis animi delectus
          blanditiis magnam, cum ad praesentium magni, quasi, at nesciunt
          dolores repellendus pariatur. Voluptates excepturi dolores corporis.
          Doloremque dolorem quod, et aspernatur illo quibusdam porro blanditiis
          ipsa a explicabo nesciunt necessitatibus, quos sint asperiores
          impedit, animi placeat ratione mollitia corporis distinctio obcaecati?
          Vero accusantium neque ut quas eligendi quod voluptatem voluptas
          dignissimos. Commodi quia aliquam corrupti deserunt temporibus ipsam
          voluptatum impedit consectetur saepe tenetur. Mollitia sunt accusamus
          magni consequatur esse iste voluptas. Reprehenderit distinctio illum,
          sit voluptatibus quisquam veritatis repudiandae earum quae fugit autem
          aliquam laborum nihil temporibus modi provident tempore consectetur?
          Quos, expedita unde nulla error, recusandae, voluptatum eos sit iusto
          vitae eveniet cumque laudantium maiores explicabo? Similique quia
          eveniet placeat alias minus provident natus, facere repellendus
          incidunt amet omnis, tenetur illo quidem. Asperiores, corrupti in cum
          magni laborum hic? Ipsum debitis suscipit reiciendis expedita aut modi
          sequi deserunt cupiditate quibusdam veritatis architecto illo, itaque
          aliquam, aspernatur ducimus iure pariatur ex laborum. Assumenda atque
          cumque, esse quaerat ut repudiandae nemo voluptas culpa veritatis,
          doloremque necessitatibus? Aperiam, officia dignissimos? Quo rerum sed
          atque ipsum consequatur tempora repellat perspiciatis itaque
          blanditiis eum maiores accusamus aut in sit, quisquam aliquam,
          obcaecati inventore odit facilis consectetur mollitia laudantium
          voluptatem. Et, nam. Sapiente ex nam fugiat, rem ab error mollitia
          fuga eveniet recusandae nobis, laborum enim nesciunt eligendi
          consectetur quibusdam numquam qui itaque beatae debitis maiores non,
          architecto quas dolores! Similique unde quasi eaque, quas dolore
          asperiores inventore possimus consequatur ut temporibus tempore
          repudiandae placeat provident, veritatis ex amet nesciunt incidunt,
          voluptates recusandae ab blanditiis numquam soluta eos? Quo.
        </p>
         <CommentForm/>
         <div style={{height:35,marginBottom:53}}>Сортировать по: Лучшие</div>
         <PostComment/>
      </div>
     
    </div>,
    node
  );
}
