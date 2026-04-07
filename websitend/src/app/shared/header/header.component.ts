import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {

    $(document).ready(() => {

      $(".mobile_nav").on('click', function () {

        const mm = $(".mobile_menu");
        const mn = $(".mobile_nav");
        const a = "active";

        if (mm.hasClass(a) && mn.hasClass(a)) {

          mm.removeClass(a).fadeOut(200);
          mn.removeClass(a);

          $('.mobile_menu li').each(function (this: HTMLElement) {
            $(this).removeClass('slide');
          });

        } else {

          mm.addClass(a).fadeIn(200);
          mn.addClass(a);

          $('.mobile_menu li').each(function (this: HTMLElement, i: number) {
            const t = $(this);
            setTimeout(() => {
              t.addClass('slide');
            }, (i + 1) * 100);
          });

        }
      });

    });

  }
}
